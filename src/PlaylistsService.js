const { Pool } = require('pg');
const { playlistSongsStructure } = require('./utils');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylistSong(id) {
    const query = {
      text: `SELECT playlist_songs.*, song.title, song.performer, playlists.*, users.username
      FROM playlist_songs
      LEFT JOIN song ON song.id = playlist_songs.song_id
      LEFT JOIN playlists on playlists.id = $1
      LEFT JOIN users on users.id = playlists.owner
      WHERE playlist_songs.playlist_id = $1`,
      values: [id],
    };
    const result = await this._pool.query(query);

    return playlistSongsStructure(result.rows);
  }
}

module.exports = PlaylistsService;
