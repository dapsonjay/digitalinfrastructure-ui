import { ProfileDTO } from './profileDTO';

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  offset: number;
  sort: string;
}

export interface PageMetaData {

  pageable: Pageable;
  totalPages: number;
  totalElements: number;
}

export interface PageableProfileDataDto {
  profileDto: ProfileDTO[];
  page: PageMetaData;
}
