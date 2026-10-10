import { ImageResponse } from 'next/og';

export const alt = 'Suman Kumar — Security Engineer & Full-Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #050505 0%, #07101e 45%, #0B1120 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(0,245,255,0.35) 0%, rgba(0,245,255,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(139,92,246,0.32) 0%, rgba(139,92,246,0) 70%)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 22px',
              borderRadius: 9999,
              border: '1px solid rgba(0,245,255,0.35)',
              background: 'rgba(0,245,255,0.08)',
              color: '#00F5FF',
              fontSize: 24,
              letterSpacing: 4,
            }}
          >
            SECURITY · FULL-STACK · AI
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 1,
              background: 'linear-gradient(135deg, #00F5FF 0%, #3B82F6 55%, #8B5CF6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Suman Kumar
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 40,
              fontWeight: 500,
              color: '#c0cadb',
            }}
          >
            Security Engineer &amp; Full-Stack Developer · IIT Patna
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 28,
            color: '#9fb0c9',
          }}
        >
          <div style={{ display: 'flex' }}>github.com/sumansingh20</div>
          <div style={{ display: 'flex', color: '#00F5FF' }}>sumanportfolios.vercel.app</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
