import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // Try AVIF first (better compression and transparency support)
    const avifPath = path.join(process.cwd(), 'public', 'logo.avif');
    try {
      const avifBuffer = await readFile(avifPath);
      return new NextResponse(avifBuffer, {
        headers: {
          'Content-Type': 'image/avif',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    } catch (avifError) {
      // Fallback to PNG if AVIF doesn't exist
      const pngPath = path.join(process.cwd(), 'public', 'logo.png');
      const pngBuffer = await readFile(pngPath);
      
      return new NextResponse(pngBuffer, {
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    }
  } catch (error) {
    console.error('Error serving logo:', error);
    return new NextResponse('Logo not found', { status: 404 });
  }
} 