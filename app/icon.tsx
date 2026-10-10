import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #00F5FF 0%, #3B82F6 50%, #8B5CF6 100%)',
          color: '#050505',
          fontSize: 18,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          letterSpacing: '-1px',
        }}
      >
        SK
      </div>
    ),
    { ...size }
  );
}
