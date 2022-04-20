class Listener {
  constructor(playlistsService, mailSender) {
    this._playlistsService = playlistsService;
    this._mailSender = mailSender;

    this.listen = this.listen.bind(this);
  }

  async listen(message) {
    try {
      const { userId, targetEmail } = JSON.parse(message.content.toString());

      const playlist = await this._playlistsService.getPlaylistSong(userId);
      await this._mailSender.sendEmail(targetEmail, JSON.stringify(playlist));
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Listener;
