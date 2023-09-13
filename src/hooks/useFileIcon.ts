import { FileType, getFileType } from '../utils/get-file-type.ts';
import { useEffect, useState } from 'react';


export const useFileIcon = function (file: File): string {
    const [ url, setUrl ] = useState<string>('');

    useEffect(() => {
        const fileType: FileType = getFileType(file.type);
        const reader: FileReader = new FileReader();
        switch (fileType) {
            case FileType.IMAGE:
                reader.readAsDataURL(file);
                const onLoadHandler = function () {
                    setUrl(reader.result as string);
                };
                reader.addEventListener('load', onLoadHandler);
                return () => reader.removeEventListener('load', onLoadHandler);
            case FileType.TEXT:
                setUrl('text');
                break;
            default:
                setUrl('other');
        }
    }, [ file ]);

    return url;
};