import { revalidate } from 'lib/bagisto';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest): Promise<NextResponse> {
  return revalidate(req);
}
