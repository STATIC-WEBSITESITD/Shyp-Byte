import type { FC } from "react";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.shypbyte.customer";

const QrDownloadSticky: FC = () => {
  return (
    <div className='btn-qr-sticky'>
      <a
        href={PLAY_STORE}
        target='_blank'
        rel='noopener noreferrer'
        className='btn-qr-sticky__trigger'
        aria-label='Scan QR code to download the Shyp Byte app'
        title='Scan to download the app'
      >
        <img
          src='/assets/images/app/app-qr.png'
          alt=''
          className='btn-qr-sticky__thumb'
          aria-hidden
        />
      </a>
      <div className='btn-qr-sticky__panel' role='tooltip'>
        <img
          src='/assets/images/app/app-qr.png'
          alt='QR code to download Shyp Byte'
          className='btn-qr-sticky__qr'
        />
        <span className='btn-qr-sticky__label'>Scan to download</span>
        <span className='btn-qr-sticky__hint'>Get the full mobile experience</span>
      </div>
    </div>
  );
};

export default QrDownloadSticky;
