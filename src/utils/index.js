/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const playlists = ({ id, name, username }) => ({
  id,
  name,
  username,
});

const songs = ({ song_id, title, performer }) => ({
  id: song_id,
  title,
  performer,
});
const uniqueValueSongTitle = (firstValue, index, self) => self.findIndex((secondValue) => (secondValue.title === firstValue.title)) === index;
const playlistSongsStructure = (playlistsSongs) => {
  const playlist = playlistsSongs.map(playlists);
  const song = playlistsSongs.map(songs).filter(uniqueValueSongTitle);
  return {
    ...playlist[0],
    songs: song,
  };
};

module.exports = {
  playlistSongsStructure,
};
