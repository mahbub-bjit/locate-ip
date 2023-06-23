import { regExForIp } from '@/config/constants';

export const isIpValid = (ip: string) => {
    return !!ip.match(regExForIp);
};
