import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { Pagination } from '../models/pagination.model';

@Injectable()
export class PaginationService {

    createPagination(totalItems: number, currentPage: number, pageSize: number): Pagination {
        const totalPages = Math.ceil(totalItems / pageSize);
        let startPage: number;
        let endPage: number;

        if (totalPages <= 4) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 2) {
                startPage = 1;
                endPage = 4;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 3;
                endPage = totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }

        const startIndex = (currentPage - 1) * +pageSize;

        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex: Math.min(startIndex + +pageSize - 1, totalItems - 1),
            pages: _.range(startPage, endPage + 1)
        };
    }
}
