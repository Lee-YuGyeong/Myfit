import { HttpException, HttpStatus } from "@nestjs/common";

export function emailException() {
    throw new HttpException({
      status: HttpStatus.BAD_REQUEST,
      error: '이메일 형식으로 다시 입력해주세요.',
    }, HttpStatus.BAD_REQUEST);
}
  
export function lsUserException() {
    throw new HttpException({
      status: HttpStatus.BAD_REQUEST,
      error: '이미 존제하는 회원',
    }, HttpStatus.BAD_REQUEST);
}