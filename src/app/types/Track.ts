export type Track = {
  id: number,
  title: string,
  title_short: string,
  title_version: string,
  link: string,
  duration: number,
  rank: number,
  explicit_lyrics: false,
  explicit_content_lyrics: number,
  explicit_content_cover: number,
  preview: string,
  md5_image: number,
  position: number,
  artist: {
    id: number,
    name: string,
    link: string,
    picture: string,
    picture_small: string,
    picture_medium: string,
    picture_big: string,
    picture_xl: string,
    radio: true,
    tracklist: string,
    type: string,
  },
  album: {
    id: 468167025,
    title: string,
    cover: string,
    cover_small: string,
    cover_medium: string,
    cover_big: string,
    cover_xl: string,
    md5_image: string,
    tracklist: string,
    type: string,
  },
  type: string,
};