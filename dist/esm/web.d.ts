import { WebPlugin } from '@capacitor/core';
import type { CameraPreviewOptions, CameraPreviewPictureOptions, CameraPreviewFlashMode, CameraSampleOptions, CameraOpacityOptions, CameraPreviewPlugin } from './definitions';
export declare class CameraPreviewWeb extends WebPlugin implements CameraPreviewPlugin {
    /**
     *  track which camera is used based on start options
     *  used in capture
     */
    private isBackCamera;
    constructor();
    start(options: CameraPreviewOptions): Promise<void>;
    private stopStream;
    stop(): Promise<any>;
    capture(options: CameraPreviewPictureOptions): Promise<any>;
    captureSample(_options: CameraSampleOptions): Promise<any>;
    stopRecordVideo(): Promise<any>;
    startRecordVideo(_options: CameraPreviewOptions): Promise<any>;
    getSupportedFlashModes(): Promise<{
        result: CameraPreviewFlashMode[];
    }>;
    getHorizontalFov(): Promise<{
        result: any;
    }>;
    setFlashMode(_options: {
        flashMode: CameraPreviewFlashMode | string;
    }): Promise<void>;
    flip(): Promise<void>;
    setOpacity(_options: CameraOpacityOptions): Promise<any>;
}
