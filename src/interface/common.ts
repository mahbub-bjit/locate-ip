export interface ipInterface {
    address: string;
}

export interface locationInterface {
    longitude: number | null;
    latitude: number | null;
    city: string;
    region_code: string;
    country_name: string;
    country_code: string;
    error: string;
}

export interface titleSubtitleInterface {
    title: string;
    subtitle: string;
}
