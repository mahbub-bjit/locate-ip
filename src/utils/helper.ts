import { regExForIp } from '@/config/constants';

export const isIpValid = (ip: string) => {
    return !!ip.match(regExForIp);
};

export const generateCoordinates = (lat: number | null, lng: number | null) => {
    if (!lat || !lng) return '';
    const latD = lat > 0 ? 'N' : 'S';
    const lngD = lng > 0 ? 'E' : 'W';
    lat = Math.abs(lat);
    lng = Math.abs(lng);
    const latHour = Math.floor(lat);
    const latMin = Math.floor((lat % 1) * 60);
    const latSec = ((((lat % 1) * 60) % 1) * 60).toFixed(2);
    const lngHour = Math.floor(lng);
    const lngMin = Math.floor((lng % 1) * 60);
    const lngSec = ((((lng % 1) * 60) % 1) * 60).toFixed(2);
    return `${latHour}° ${latMin}' ${latSec}'' ${latD} ${lngHour}° ${lngMin}' ${lngSec}'' ${lngD}`;
};
