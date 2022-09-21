import React from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Body from "../../components/Layout/DefaultLayout/Body";
import styles from "./FAQ.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function FAQ() {
  return (
    <DefaultLayout>
      <Body>
        <h1 className="text-center" style={{ fontSize: "3.5rem" }}>
          Frequently asked questions
        </h1>
        <h2 style={{ color: "#ffe08a" }}>
          1. Movie playback is slow, even though VIP Mode is enabled for that
          movie?
        </h2>
        <p className="mb-4">
          If the movie plays but stops every once in a while to wait for it to
          load again (despite trying to choose different servers), it needs to
          be determined by your device or by your network.
        </p>
        <ul>
          <li>
            <p className="mb-4">
              Try watching the movie on another device (computer / phone /
              TV...). If you change to another device, the movie will run
              smoothly again => because of your old device. If it's a TV, check
              the TV setup and disable the IPv6 network connection protocol . If
              it's an iOS device, then try using a different browser (e.g.
              Chrome) instead of the default Safari browser, but in general iOS
              players have problems with high bitrate movies + 5.1 audio.
            </p>
          </li>
          <li>
            <p className="mb-4">
              If the movie runs slow on all the devices you try, with all the
              servers the site offers (VIP mode is only available), it's because
              your network's international bandwidth is squeezed (due to lack of
              internet connection). international transmission lines are
              congested during peak hours or cable breaks...). There are 2
              solutions: 1. Call to reflect with the carrier; 2. Use a VPN
              (virtual private network) to speed up your network. We recommend
              you to use the WARP application =>{" "}
              <a className={cx("link")} href="https://1.1.1.1/">
                download here
              </a>{" "}
              (or download WARP +{" "}
              <a className={cx("link")} href="https://apkcombo.com/vi/vpn/">
                here
              </a>
              ).
            </p>
            <p className="mb-4">
              Note: turning on VPN will change the route of data transmission
              from the server to your device, and not just turning on VPN will
              make the network faster - sometimes turning on VPN will make your
              network slower! Just like when this route is congested, traffic is
              congested, it is advisable to change to another more airy route,
              but other times it's the other way around!
            </p>
            <p className="mb-4">
              Therefore, when watching movies with lag, do the following to find
              the fastest data transmission route:
            </p>
            <ul className="mb-4">
              <li>
                Turn off the VPN and then try changing each server on the site
              </li>
              <li>
                Turn on the VPN and try changing each server on the website
              </li>
            </ul>
            <p className="mb-4">
              ...until you find a combination that makes watching movies
              smoother. And remember, that combination is not necessarily the
              best all the time. So whenever there is lag, repeat the above
              steps!
            </p>
          </li>
        </ul>
        <h2 style={{ color: "#ffe08a" }} className="mb-4">
          2. Having problems with the sound: the movie has no sound, the
          character's voice is lost, or the sound is cracked?
        </h2>
        <ul className="mb-4">
          <li>
            If viewing on mobile: The sound error is caused by your browser
            (usually Chrome).{" "}
            <a
              className={cx("link")}
              href="https://play.google.com/store/apps/details?id=org.mozilla.firefox"
            >
              Install & use Firefox
            </a>{" "}
            browser !
          </li>
          <li>
            If you watch on PC: Unlike movies/clips on other websites (including
            Youtube), movies on WatchMovie use 5.1 sound (6 channels) instead of
            stereo (2 channels). If the device you are looking at has only 2
            speakers, you need to set up the sound management program on the
            device correctly: choose the correct mode with the number of
            speakers you have (stereo), do not choose more, otherwise your
            device will try to output sound to speakers that do not exist =>
            loss of sound.
          </li>
          <p>
            For example, here is the audio mode selection of Realtek HD Audio
            Manager:{" "}
            <a className={cx("link")} href="https://imgur.com/a/D6nPGcl">
              click here
            </a>
          </p>
        </ul>
        <h2 style={{ color: "#ffe08a" }} className="mb-4">
          3. How to watch movies on TV?
        </h2>
        <p className="mb-4">
          To watch movies on TV, your TV must have a web browser. Most Smart TVs
          in recent years have a built-in browser. If your TV does not have a
          browser available, you can install it from the app store (Google Play
          Store / CH Play / App Store) on your TV. With Android TV, you should
          install Puffin browser. After installing the browser, visit the
          website as you would on your computer/phone and watch the movie.
        </p>
        <p className="mb-4">
          If you can't watch movies with a browser on your TV, you can connect
          your computer to your TV (usually via HDMI) and then play it from your
          computer to your TV.
        </p>
      </Body>
    </DefaultLayout>
  );
}
