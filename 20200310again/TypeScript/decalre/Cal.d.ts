// 声明文件不包含实现，它只是类型声明，把声明文件加入到TypeScript中
declare module Runoob {
    export class Calc {
        doSum(limit: number): number;
    }
}

export {}