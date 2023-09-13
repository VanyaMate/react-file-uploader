import React from 'react';
import { useFileIcon } from '../../hooks/useFileIcon.ts';
import css from './file-item.module.scss';


export interface IFileItemProps extends React.HTMLAttributes<HTMLDivElement> {
    file: File;
}

const FileItem: React.FC<IFileItemProps> = (props: IFileItemProps) => {
    const { file, className, ...other } = props;
    const fileIconUrl: string           = useFileIcon(file);

    return (
        <div { ...other } className={ [ css.container, className ].join(' ') }>
            <img src={ fileIconUrl } alt={ '' } className={ css.icon }/>
            <p className={ css.title }>{ file.name }</p>
        </div>
    );
};

export default React.memo(FileItem);