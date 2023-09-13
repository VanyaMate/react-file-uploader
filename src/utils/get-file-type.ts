export enum FileType {
    IMAGE,
    TEXT,
    OTHER,
}

export const getFileType = function (type: string): FileType {
    console.log(type);
    switch (type) {
        case 'image/jpeg':
        case 'image/png':
            return FileType.IMAGE;
        default:
            return FileType.OTHER;
    }
};