import { Image } from 'antd';
import { type ReactElement, type ReactNode, useState } from 'react';

interface Props {
  readonly children: ReactElement;
  readonly src: string;
}

export default function ZoomableImage({ children, src }: Props): ReactNode {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
        }}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </div>
      <Image
        src={src}
        style={{ display: 'none' }}
        preview={{
          src,
          visible: open,
          onVisibleChange: (value: boolean) => {
            setOpen(value);
          },
        }}
      />
    </>
  );
}
