import { Yolog, ConsolePlugin } from '@jitesoft/yolog/browser';

class Logger {
  /** @var {Yolog} logger */
  #logger = null;

  install (vue, options) {
    this.#logger = new Yolog([new ConsolePlugin(), ...(options?.plugins || [])]);
    vue.prototype.$logger = this;
  }

  /**
   * Call a custom tag not already defined.
   *
   * @param {String} tag Tag name.
   * @param {String} message Message to log.
   * @param {...any} [args] Argument list to pass to plugins for formatting.
   */
  async custom (tag, message, ...args) {
    await this.#logger.custom(tag, message, ...args);
  }

  /**
   * Log a debug message.
   *
   * @param {String} message Message to log.
   * @param {...any} [args] Argument list to pass to plugins for formatting.
   */
  async debug (message, ...args) {
    await this.#logger.debug(message, ...args);
  }

  /**
   * Log a info message.
   *
   * @param {String} message Message to log.
   * @param {...any} [args] Argument list to pass to plugins for formatting.
   */
  async info (message, ...args) {
    await this.#logger.info(message, ...args);
  }

  /**
   * Log a warning message.
   *
   * @param {String} message Message to log.
   * @param {...any} [args] Argument list to pass to plugins for formatting.
   */
  async warning (message, ...args) {
    await this.#logger.warning(message, ...args);
  }

  /**
   * Log an error message.
   *
   * @param {String} message
   * @param {...any} [args] Argument list to pass to plugins for formatting.
   */
  async error (message, ...args) {
    await this.#logger.error(message, ...args);
  }

  /**
   * Log a critical message.
   *
   * @param {String} message Message to log.
   * @param {...any} [args] Argument list to pass to plugins for formatting.
   */
  async critical (message, ...args) {
    await this.#logger.critical(message, ...args);
  }

  /**
   * Log an alert message.
   *
   * @param {String} message Message to log.
   * @param {...any} [args] Argument list to pass to plugins for formatting.
   */
  async alert (message, ...args) {
    await this.#logger.alert(message, ...args);
  }

  /**
   * Log an emergency message.
   *
   * @param {String} message Message to log.
   * @param {...any} [args] Argument list to pass to plugins for formatting.
   */
  async emergency (message, ...args) {
    await this.#logger.emergency(message, ...args);
  }
}

export default new Logger();
