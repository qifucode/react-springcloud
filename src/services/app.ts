import http from '../utils/request';

export function createUserRole(data: any) {
    return http.post('/api/createUser', data);
}