import { FaInstagramSquare, FaLinkedin, FaMeetup, FaTiktok, FaTwitterSquare, FaWhatsapp, FaYoutubeSquare, FaTwitch } from 'react-icons/fa';
import cn from 'classnames';

import { TopBar, FluidContainer } from '@makinox/makinox-ui';

import {
  LINK_BARRANQUILLA_INSTAGRAM,
  LINK_BARRANQUILLA_LINKEDIN,
  LINK_BARRANQUILLA_MEETUP,
  LINK_BARRANQUILLA_TIKTOK,
  LINK_BARRANQUILLA_TWITCH,
  LINK_BARRANQUILLA_TWITTER,
  LINK_BARRANQUILLA_WHATSAPP,
  LINK_BARRANQUILLA_YOUTUBE,
} from '../../constants';

export const Footer = () => {
  const classes = {
    item: cn('ml-2 text-primary-500 text-2xl'),
  };
  return (
    <footer className={`${TopBar()} mt-28`}>
      <div className={FluidContainer()} style={{ padding: '10px 0' }}>
        <div className="flex flex-col justify-center md:flex-row md:justify-between">
          <span className="text-center">Barranquilla JS (BAQJS) - {new Date().getFullYear()}</span>
          <div className="flex justify-center">
            <a className={classes.item} href={LINK_BARRANQUILLA_MEETUP} target="_blank" rel="noreferrer">
              <FaMeetup />
            </a>
            <a className={classes.item} href={LINK_BARRANQUILLA_WHATSAPP} target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a className={classes.item} href={LINK_BARRANQUILLA_TIKTOK} target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
            <a className={classes.item} href={LINK_BARRANQUILLA_TWITCH} target="_blank" rel="noreferrer">
              <FaTwitch />
            </a>
            <a className={classes.item} href={LINK_BARRANQUILLA_TWITTER} target="_blank" rel="noreferrer">
              <FaTwitterSquare />
            </a>
            <a className={classes.item} href={LINK_BARRANQUILLA_LINKEDIN} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a className={classes.item} href={LINK_BARRANQUILLA_INSTAGRAM} target="_blank" rel="noreferrer">
              <FaInstagramSquare />
            </a>
            <a className={classes.item} href={LINK_BARRANQUILLA_YOUTUBE} target="_blank" rel="noreferrer">
              <FaYoutubeSquare />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
