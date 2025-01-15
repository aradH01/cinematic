'use client';

import React, { useState } from "react";
import { Icon } from "@/components/elements/Icon";

interface DownloadButtonProps {
    link: string;
    name: string;
}

export function DownloadButton({ link, name }: DownloadButtonProps) {
    const [isDownloading, setIsDownloading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleDownload = async () => {
        setIsDownloading(true);

        try {
            const response = await fetch(link); // Fetch the file
            if (response.ok) {
                const contentLength = response.headers.get("Content-Length");
                const total = contentLength ? parseInt(contentLength, 10) : 0;
                let received = 0;

                // Read the response as a stream
                const reader = response.body?.getReader();
                const chunks: Uint8Array[] = [];

                // Read the stream in chunks
                while (true) {
                    const { done, value } = await reader!.read();
                    if (done) break;
                    chunks.push(value);
                    received += value.length;
                    setProgress(Math.round((received / total) * 100)); // Update progress
                }

                // Create a Blob from the chunks and trigger download
                const blob = new Blob(chunks, { type: response.headers.get("Content-Type") || "application/octet-stream" });
                const downloadLink = document.createElement("a");
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = name;
                downloadLink.click();
            } else {
                console.error("Download failed");
            }
        } catch (error) {
            console.error("Error during download", error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={handleDownload}
                className={`bg-gray900 w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-300`}
            >
                <Icon name="Downloads" className="w-6 h-6 [&>g]:opacity-100" />
            </button>

            <div
                className={`absolute inset-0 rounded-full pointer-events-none border-solid border-4 transition-all duration-500 ${
                    isDownloading ? "border-red-500" : ""
                }`}
                style={{
                    borderWidth: isDownloading ? "4px" : "0px",
                }}
            ></div>
        </div>
    );
}
