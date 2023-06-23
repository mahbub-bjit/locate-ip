import { regExForIp } from '@/config/constants';

export const isIpValid = (ip: string) => {
    return !!ip.match(regExForIp);
};

export const generateCoordinates = (lat: number | null, lng: number | null) => {
    if (!lat || !lng) return '';
    let latD = lat > 0 ? 'N' : 'S';
    let lngD = lng > 0 ? 'E' : 'W';
    lat = Math.abs(lat);
    lng = Math.abs(lng);
    let latHour = Math.floor(lat);
    let latMin = Math.floor((lat % 1) * 60);
    let latSec = ((((lat % 1) * 60) % 1) * 60).toFixed(2);
    let lngHour = Math.floor(lng);
    let lngMin = Math.floor((lng % 1) * 60);
    let lngSec = ((((lng % 1) * 60) % 1) * 60).toFixed(2);
    return `${latHour}° ${latMin}' ${latSec}'' ${latD} ${lngHour}° ${lngMin}' ${lngSec}'' ${lngD}`;
};
