'use client';
import React, {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';
import {Icon} from '@/components/elements/Icon';
import {SubtitleModal} from "@/components/blocks/SubtitleModal";
import {ShareModal} from "@/components/blocks/ShareModal";
import Image from "@/public/images/show4.jpg";
import {CommentModal} from "@/components/blocks/CommentModal";
import { VideoSpeedModal } from '@/components/blocks/VideoSpeedModal';

interface VideoPlayerProps {
    src: string;
    poster: string;
}

const VideoContainer = styled.div<{ isPlaying: boolean }>`
    position: relative;
    max-width: ${({ isPlaying }) => (isPlaying ? '600px' : '100%')};
    width: 100%;
    height: 100vh;
    background: black;
    cursor: pointer;
    transition: max-width 0.3s ease;
`;
const VideoElement = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:fullscreen {
        width: 100vw;
        height: 100vh;
    }

    &::webkit-fullscreen {
        width: 100vw;
        height: 100vh;
    }
`;
const CenterIcon = styled.button<{ visible?: boolean }>`
    
    background: ${({theme}) => theme.font.white};
    border: none;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
`;
const PlayWrapper = styled.div<{ visible?: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 48px;
`
const GestureOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    touch-action: none; 
`;
const VerticalProgressBar = styled.div<{ value: number; type: 'brightness' | 'volume' }>`
    position: absolute;
    top: 20%;
    ${({type}) => (type === 'brightness' ? 'left: 10px;' : 'right: 10px;')}
    width: 36px;
    border:1px solid ${({theme}) => theme.components.border200};
    height: 179px;
    background:${({theme}) => theme.components.black600};
    border-radius: 20px;
    backdrop-filter: blur(50px);
    overflow: hidden;
    padding: 4px;
    .progress-bar {
        content: '';
        display: block;
        width: 100%;
        height: ${({value}) => `${value * 100}%`};
        background: ${({type}) => (type === 'brightness' ? '#fff' : '#fff')};
        transition: height 0.1s ease;
        border-radius: 20px;
    }
`;
const ControlBar = styled.div<{ visible: boolean }>`
    position: absolute;
    bottom: 10px;
    width: 100%;
    padding: 10px 16px;
    display: flex;
    opacity: ${({visible}) => (visible ? '100' : '0')};
    justify-content: center;
    align-items: center;
    background-color: transparent;
    z-index: 5;
    transition: all 250ms ease;

    button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`;
const ProgressBarContainer = styled.div<{ visible: boolean }>`
    position: absolute;
    bottom: 75px;
    left: 5%;
    width: 90%;
    z-index: 5;
    height: 6px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    opacity: ${({visible}) => (visible ? '1' : '0')};
    transition: opacity 250ms ease;
`;
const ProgressBarFill = styled.div`
    height: 100%;
    background: white;
    width: 0;
    border-radius: 3px;
    pointer-events: none;
`;
const TimeDisplay = styled.div<{ visible: boolean }>`
    position: absolute;
    bottom: 95px;
    left: 5%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
    opacity: ${({visible}) => (visible ? '1' : '0')};
    transition: opacity 250ms ease;
    z-index: 10;
`;
const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return [
        hours > 0 ? hours.toString().padStart(2, '0') : null,
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0'),
    ]
        .filter(Boolean)
        .join(':');
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({src, poster}) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressFillRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);
    const [brightness, setBrightness] = useState(1);
    const [volume, setVolume] = useState(1);
    const [touchArea, setTouchArea] = useState<'left' | 'right' | null>(null);
    const [showProgressBar, setShowProgressBar] = useState(false);
    const mouseStart = useRef<{ x: number; y: number } | null>(null);
    const [isMouseDragging, setIsMouseDragging] = useState(false);
    const touchStart = useRef<{ x: number; y: number } | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>('Auto (Recommended)');
    const [subtitleModal, setSubtitleModal] = useState(false)
    const [subtitles, setSubtitles] = useState<string>("");
    const [showShareModal, setShowShareModal] = useState(false)
    const [showCommentsModal, setShowCommentsModal] = useState(false)
    const [showSpeedModal, setShowSpeedModal] = useState(false)
    const [selectedSpeed, setSelectedSpeed] = useState('')
    const subtitleOptions = [
        { value: "Auto (Recommended)", src: "" },
        { value: "Off", src: "" },
        { value: "English", src: "/subtitles/english.vtt" },
        { value: "Arabic", src: "/subtitles/arabic.vtt" },
    ];
    const speedOptions = [
        { value: "1x" },
        { value: "1.5x"},
        { value: "2x" },
    ];

    useEffect(() => {
        return () => {

            document.documentElement.style.filter = 'brightness(1)';
        };
    }, []);
    useEffect(() => {
        const handleGlobalMouseUp = () => {
            if (isMouseDragging) handleMouseUp();
        };
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, [isMouseDragging])
    useEffect(() => {
        resetHideControlsTimeout();
        if (videoRef.current) {
            const onLoadedMetadata = () => {
                setDuration(videoRef.current!.duration);
            };
            videoRef.current.addEventListener('loadedmetadata', onLoadedMetadata);
            videoRef.current.addEventListener('timeupdate', updateProgressBar);

            return () => {
                videoRef.current?.removeEventListener(
                    'loadedmetadata',
                    onLoadedMetadata
                );
                videoRef.current?.removeEventListener('timeupdate', updateProgressBar);
            };
        }
    }, []);
    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const track = videoElement.textTracks[0];
            track.mode = "showing";

            track.oncuechange = () => {
                const cue = track.activeCues?.[0];
                if (cue && "text" in cue) {
                    setSubtitles((cue as VTTCue).text);
                } else {
                    setSubtitles("");
                }
            };
        }
        return () => {
            setSubtitles("");
        };
    }, []);

    const handlePause = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch((err) => {
                console.warn("Failed to exit fullscreen:", err);
            });
        }
        setIsPlaying(false);
    };
    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
            resetHideControlsTimeout();
        }
    };
    const handleTouchStart = (e: React.TouchEvent) => {
        const touchX = e.touches[0].clientX;
        const area = touchX < window.innerWidth / 2 ? 'left' : 'right';
        setTouchArea(area);

        touchStart.current = {x: touchX, y: e.touches[0].clientY};
        setShowProgressBar(true);
    };
    const handleMouseDown = (e: React.MouseEvent) => {
        const mouseX = e.clientX;
        const area = mouseX < window.innerWidth / 2 ? 'left' : 'right';
        setTouchArea(area);

        mouseStart.current = { x: mouseX, y: e.clientY };
        setIsMouseDragging(true);
        setShowProgressBar(true);
    };
    const handleMouseUp = () => {
        setTouchArea(null);
        setIsMouseDragging(false);
        setShowProgressBar(false);
        mouseStart.current = null;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!touchStart.current || !touchArea) return;

        const deltaY = e.touches[0].clientY - touchStart.current.y;

        if (touchArea === 'left') {

            const newBrightness = Math.max(0.5, Math.min(brightness + deltaY / 300, 2));
            setBrightness(newBrightness);
            document.documentElement.style.filter = `brightness(${newBrightness})`;
        } else if (touchArea === 'right') {

            const newVolume = Math.min(Math.max(volume + deltaY / 300, 0), 1);
            setVolume(newVolume);
            if (videoRef.current) {
                videoRef.current.volume = newVolume;
            }
        }
        resetHideControlsTimeout();
    };
    const handleTouchEnd = () => {
        setTouchArea(null);
        setShowProgressBar(false);
        touchStart.current = null;
    };
    const resetHideControlsTimeout = () => {
        if (hideControlsTimeout.current) {
            clearTimeout(hideControlsTimeout.current);
        }
        hideControlsTimeout.current = setTimeout(() => {
            setShowControls(false);
        }, 2000);
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        setShowControls(true);
        if (!mouseStart.current || !touchArea || !isMouseDragging) return;

        const deltaY = e.clientY - mouseStart.current.y;

        if (touchArea === 'left') {
            const newBrightness = Math.max(0.5, Math.min(brightness + deltaY / 300, 2));
            setBrightness(newBrightness);
            document.documentElement.style.filter = `brightness(${newBrightness})`;
        } else if (touchArea === 'right') {
            const newVolume = Math.min(Math.max(volume - deltaY / 300, 0), 1);
            setVolume(newVolume);
            if (videoRef.current) {
                videoRef.current.volume = newVolume;
            }
        }
        resetHideControlsTimeout();

    };
    const updateProgressBar = () => {
        if (videoRef.current && progressFillRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            const percentage =
                (videoRef.current.currentTime / videoRef.current.duration) * 100;
            progressFillRef.current.style.width = `${percentage}%`;
        }
    };
    const handleProgressBarClick = (e: React.MouseEvent) => {
        if (videoRef.current && progressBarRef.current) {
            const rect = progressBarRef.current.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const percentage = offsetX / rect.width;
            videoRef.current.currentTime = percentage * videoRef.current.duration;
        }
    };
    const handleTypeChange = (value: string) => {
        setSelectedOption(value);

        if (videoRef.current) {
            const tracks = videoRef.current.textTracks;
            for (let i = 0; i < tracks.length; i++) {
                tracks[i].mode = tracks[i].label === value ? "showing" : "disabled";
            }
        }
    };
    const handleSpeedChange = (value: string) => {
        setSelectedSpeed(value); // Update the selected speed
        if (videoRef.current) {
            videoRef.current.playbackRate = parseFloat(value.replace("x", "")); // Apply the playback speed
        }
    };
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = parseFloat(selectedSpeed.replace("x", "")) || 1;
        }
    }, [selectedSpeed]);

    const handleSkip = (seconds:number) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds;
        }
    };
    return (
        <VideoContainer
            isPlaying={isPlaying}
            onMouseMove={handleMouseMove}

        >
            <VideoElement
                ref={videoRef}
                src={src}
                poster={poster}
                preload="metadata"
                playsInline
                controls={false}
                muted={false}
            >

                {subtitleOptions
                    .filter((option) => option.src)
                    .map((option, index) => (
                            <track className=""  key={index}
                                   label={option.value}
                                   src={option.src}
                                   kind="subtitles"
                                   srcLang={option.value.toLowerCase()}
                                   default={option.value === "Auto (Recommended)"}
                            />
                    ))}


            </VideoElement>
            <GestureOverlay
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            />
            {showProgressBar && touchArea === 'right' && (
            <VerticalProgressBar type="volume" value={volume}>
                {
                    volume ===0 &&
                    <Icon name="VolumeMute" className="fill-white w-[20px] h-[20px] absolute top-[4px] right-1/2 translate-x-1/2"/>
                }
                <div className="relative progress-bar">
                    {volume < 0.5 ? (
                        <Icon name="VolumeDown" className="w-[20px] h-[20px] absolute bottom-[4px] right-1/2 translate-x-1/2"/>
                    ) : (
                        <Icon name="VolumeUp" className="w-[20px] h-[20px] absolute bottom-[4px] right-1/2 translate-x-1/2"/>
                    )}
                </div>
            </VerticalProgressBar>
        )}
            {showProgressBar && touchArea === 'left' && (
                <VerticalProgressBar type="brightness" value={brightness / 2}>
                    <div className="relative progress-bar">
                        {brightness < 1 ? (
                            <Icon name="BrightnessDown" className="w-[20px] h-[20px] absolute bottom-[4px] right-1/2 translate-x-1/2"/>
                        ) : (
                            <Icon name="BrightnessUp" className="w-[20px] h-[20px] absolute bottom-[4px] right-1/2 translate-x-1/2"/>
                        )}
                    </div>
                </VerticalProgressBar>
            )}
            <PlayWrapper visible={showControls} className="w-[224px] h-[80px]">
                <Icon name="VideoBackSecond" className="w-8 h-8"   onClick={() => handleSkip(-15)}/>
                <CenterIcon onClick={handlePlayPause} >
                    {isPlaying ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="#000"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6"/>
                        </svg>
                    ) : (
                        <Icon name="PlayIconV2" className="w-[20px] h-[20px]"/>
                    )}
                </CenterIcon>
                <Icon name="VideoFrontSecond" className="w-8 h-8" onClick={() => handleSkip(15)}/>
            </PlayWrapper>


            <TimeDisplay visible={showControls}>
                <span className="text-white font-urbanist">{formatTime(currentTime)}</span>
                <span className="!text-white500 font-urbanist">{formatTime(duration)}</span>
            </TimeDisplay>

            <ProgressBarContainer
                visible={showControls}
                ref={progressBarRef}
                onClick={handleProgressBarClick}
            >
                <ProgressBarFill ref={progressFillRef}/>
            </ProgressBarContainer>

            <ControlBar visible={showControls}>
                <div className="flex items-center justify-between w-[90%] ">
                    <button className="w-[28px] h-[28px]" onClick={() => {
                        setShowSpeedModal(prevState => !prevState)
                    }}>
                        <Icon name="VideoSpeed" className="!w-[28px] !h-[28px]"/>
                    </button>
                    <button className="w-[28px] h-[28px]">
                        <Icon name="Lock" className="!w-[28px] !h-[28px]"/>
                    </button>
                    <button className="w-[28px] h-[28px]" onClick={() => {
                        setSubtitleModal(prevState => !prevState)
                    }}>
                        <Icon name="Subtitle" className="!w-[28px] !h-[28px]"/>
                    </button>
                    <button className="w-[28px] h-[28px]" onClick={() => {
                        setShowCommentsModal(prevState => !prevState)
                    }}>
                        <Icon name="Message" className="!w-[28px] !h-[28px]"/>
                    </button>
                    <button className="w-[28px] h-[28px]" onClick={() => {
                        setShowShareModal(prevState => !prevState)
                    }}>
                        <Icon name="Share" className="!w-[28px] !h-[28px]"/>
                    </button>
                </div>
            </ControlBar>
            <SubtitleModal open={subtitleModal} onClose={() => setSubtitleModal(false)} options={subtitleOptions}
                           checked={selectedOption} onChange={handleTypeChange}/>
            <ShareModal link="Test link for copy" image={Image} onClose={() => setShowShareModal(false)}
                        open={showShareModal} title="Spider-man"/>
            <CommentModal link="Test link for copy" image={Image} onClose={() => setShowCommentsModal(false)}
                          open={showCommentsModal} title="Spider-man"/>
            <VideoSpeedModal open={showSpeedModal} onClose={() => setShowSpeedModal(false)} options={speedOptions}
                             checked={selectedSpeed} onChange={handleSpeedChange}/>
        </VideoContainer>
    );
};

