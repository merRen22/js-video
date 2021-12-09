import MediaPlayer from "../MediaPlayer";

/**
 * Intersection Observer
 * The Intersection Observer API provides a way to asynchronously observe changes in the intersection
 * of a target element with an ancestor element or with a top-level document's viewport.
 *
 * visibilitychange
 * This event fires with a visibilityState of hidden when a user navigates to a new page, switches tabs,
 * closes the tab, minimizes or closes the browser, or, on mobile, switches from the browser
 * to a different app. Transitioning to hidden is the last event that's reliably observable by the page,
 * so developers should treat it as the likely end of the user's session (for example, for sending
 * analytics data).
 */
class AutoPause {
  private threshold: number;
  player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilitychange = this.handleVisibilitychange.bind(this);
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);

    document.addEventListener('visibilitychange', this.handleVisibilitychange);
  }

  private handleVisibilitychange() {
    const isVisible = document.visibilityState === 'visible';
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
