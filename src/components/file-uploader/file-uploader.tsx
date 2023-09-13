import React, { useState } from 'react';
import FileItem from '../file-item/file-item.tsx';
import css from './file-uploader.module.scss';


const FileUploader = () => {
    const [ files, setFiles ] = useState<File[]>([]);

    const onLoad = function (e: React.ChangeEvent<HTMLInputElement>) {
        setFiles((prev) => [ ...prev, ...(e.target.files ?? []) ]);
    };

    return (
        <div className={ css.container }>
            <div className={ css.files }>
                {
                    files.length
                    ? files.map((file) =>
                        <FileItem
                            key={ file.name + file.size }
                            file={ file }
                        />)
                    : ''
                }
            </div>
            <input type={ 'file' } multiple={ true } onInput={ onLoad }/>
        </div>
    );
};

export default FileUploader;