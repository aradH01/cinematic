'use client';
import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Icon } from '@/components/elements/Icon';

const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: black;
    cursor: pointer;
`;

const VideoElement = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CenterIcon = styled.button<{ visible: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.font.white};
    border: none;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
`;
const GestureOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    touch-action: none; /* Disable default touch gestures */
`;
const VerticalProgressBar = styled.div<{ value: number; type: 'brightness' | 'volume' }>`
    position: absolute;
    top: 20%;
    ${({ type }) => (type === 'brightness' ? 'right: 10px;' : 'left: 10px;')}
    width: 36px;
    border:1px solid ${({ theme }) => theme.components.border200};
    height: 179px;
    background:${({ theme }) => theme.components.black600};
    border-radius: 20px;
    backdrop-filter: blur(50px);
    overflow: hidden;
    padding: 4px;
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: ${({ value }) => `${value * 100}%`};
        background: ${({ type }) => (type === 'brightness' ? '#fff' : '#fff')};
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
    opacity: ${({ visible }) => (visible ? '100' : '0')};
    justify-content: space-between;
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
    bottom: 60px;
    left: 5%;
    width: 90%;
    z-index: 5;
    height: 6px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    transition: opacity 250ms ease;
`;

const ProgressBarFill = styled.div`
    height: 100%;
    background: white;
    width: 0%;
    border-radius: 3px;
    pointer-events: none;
`;

interface VideoPlayerProps {
    src: string;
    poster: string;
}
const TimeDisplay = styled.div<{ visible: boolean }>`
    position: absolute;
    bottom: 75px;
    left: 5%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
    opacity: ${({ visible }) => (visible ? '1' : '0')};
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
const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressFillRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);
    const [brightness, setBrightness] = useState(1); // Brightness level (1 is default)
    const [volume, setVolume] = useState(1); // Volume level (1 is max)
    const [touchArea, setTouchArea] = useState<'left' | 'right' | null>(null);
    const [showProgressBar, setShowProgressBar] = useState(false);

    const touchStart = useRef<{ x: number; y: number } | null>(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play().catch((error) => {
                    console.error('Playback error:', error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };
    const handleTouchStart = (e: React.TouchEvent) => {
        const touchX = e.touches[0].clientX;
        const area = touchX < window.innerWidth / 2 ? 'left' : 'right';
        setTouchArea(area);

        touchStart.current = { x: touchX, y: e.touches[0].clientY };
        setShowProgressBar(true);
    };


    const handleTouchMove = (e: React.TouchEvent) => {
        if (!touchStart.current || !touchArea) return;

        const deltaY = e.touches[0].clientY - touchStart.current.y;

        if (touchArea === 'right') {
            // Adjust brightness (bottom to top increases)
            const newBrightness = Math.min(Math.max(brightness + deltaY / 300, 0), 2); // Scale brightness change
            setBrightness(newBrightness);
            document.documentElement.style.filter = `brightness(${newBrightness})`;
        } else if (touchArea === 'left') {
            // Adjust volume (bottom to top increases)
            const newVolume = Math.min(Math.max(volume + deltaY / 300, 0), 1); // Scale volume change
            setVolume(newVolume);
            if (videoRef.current) {
                videoRef.current.volume = newVolume;
            }
        }
    };


    const handleTouchEnd = () => {
        setTouchArea(null);
        setShowProgressBar(false);
        touchStart.current = null;
    };

    useEffect(() => {
        return () => {
            // Reset brightness when unmounting
            document.documentElement.style.filter = 'brightness(1)';
        };
    }, []);
    const resetHideControlsTimeout = () => {
        if (hideControlsTimeout.current) {
            clearTimeout(hideControlsTimeout.current);
        }
        hideControlsTimeout.current = setTimeout(() => {
            setShowControls(false);
        }, 3000); // Hide controls after 3000ms
    };

    const handleMouseMove = () => {
        setShowControls(true);
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

    return (
        <VideoContainer
            onMouseMove={handleMouseMove}

        >
            <VideoElement
                ref={videoRef}
                src={src}
                poster={poster}
                preload="metadata"
                playsInline
                controls={false}
                muted={false} // You can change this to true for autoplay in some browsers
            />
            <GestureOverlay
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />
            {showProgressBar && touchArea === 'right' && (
                <VerticalProgressBar type="brightness" value={brightness / 2} />
            )}
            {showProgressBar && touchArea === 'left' && (
                <VerticalProgressBar type="volume" value={volume} />
            )}
            <CenterIcon visible={showControls} onClick={handlePlayPause}>
                {isPlaying ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="#000"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
                    </svg>
                ) : (
                    <Icon name="PlayIconV2" className="w-[20px] h-[20px]" />
                )}
            </CenterIcon>

            <TimeDisplay visible={showControls}>
                <span className="text-white font-urbanist">{formatTime(currentTime)}</span>
                <span className="!text-white500 font-urbanist">{formatTime(duration)}</span>
            </TimeDisplay>

            <ProgressBarContainer
                visible={showControls}
                ref={progressBarRef}
                onClick={handleProgressBarClick}
            >
                <ProgressBarFill ref={progressFillRef} />
            </ProgressBarContainer>

            <ControlBar visible={showControls}>
                <button>
                    <Icon name="VideoSpeed" className="w-[28px] h-[28px]" />
                </button>
                <button>
                    <Icon name="Lock" className="w-[28px] h-[28px]" />
                </button>
                <button>
                    <Icon name="Subtitle" className="w-[28px] h-[28px]" />
                </button>
                <button>
                    <Icon name="Message" className="w-[28px] h-[28px]" />
                </button>
                <button>
                    <Icon name="Share" className="w-[28px] h-[28px]" />
                </button>
            </ControlBar>
        </VideoContainer>
    );
};

export default VideoPlayer;
