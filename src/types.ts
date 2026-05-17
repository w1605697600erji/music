/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  duration: string; // "m:ss"
  color?: string;
}

export interface Playlist {
  id: string;
  name: string;
  trackCount: number;
  duration?: string;
  coverUrl: string;
}

export interface Category {
  id: string;
  name: string;
  gradient: string;
}

export interface Podcast {
  id: string;
  title: string;
  host: string;
  category: string;
  description: string;
  coverUrl: string;
}

export interface RadioStation {
  id: string;
  name: string;
  coverUrl: string;
}
