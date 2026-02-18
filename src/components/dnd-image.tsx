import {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';

type Props = { onChange?: (file: File) => void };

export const DndImage = ({ onChange }: Props) => {
	const [preview, setPreview] = useState<string | null>(null);

	const onDrop = useCallback(
		(files: File[]) => {
			const file = files[0];
			if (!file) return;
			setPreview(URL.createObjectURL(file));
			onChange?.(file);
		},
		[onChange],
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { 'image/*': [] },
		multiple: false,
	});

	return (
		<div
			{...getRootProps()}
			className={`flex aspect-square w-full max-w-sm cursor-pointer items-center justify-center rounded-xl transition ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
		>
			<input {...getInputProps()} />
			{preview ? (
				<img
					src={preview}
					className="h-full w-full rounded-xl object-cover"
					alt=""
				/>
			) : (
				<span className="text-sm text-gray-500">Upuść zdjęcie lub kliknij</span>
			)}
		</div>
	);
};
