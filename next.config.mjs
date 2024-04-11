import createNextIntlPlugin from 'next-intl/plugin';
import withVideos from 'next-videos'

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(withVideos(nextConfig));