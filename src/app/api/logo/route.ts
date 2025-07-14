import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const logoPath = path.join(process.cwd(), 'public', 'logo.png');
    const imageBuffer = await readFile(logoPath);
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving logo:', error);
    return new NextResponse('Logo not found', { status: 404 });
  }
} 