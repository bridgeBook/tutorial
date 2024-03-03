import { calculateWinner, isDraw } from "./ticTacToeFunctions"

const F = "○"
const S = "X"

describe("isDraw", () => {
    test("全てのマスが埋まっていてかつ勝者が決まっていない場合、trueを返す", () => {
        const square = [F, S, F, F, S, F, S, F, S]
        expect(isDraw(square, null)).toBe(true)
    })

    test("全てのマスが埋まっていない場合、falseを返す", () => {
        const square = [null, null, null, null, null, null, null, null, null]
        expect(isDraw(square, null)).toBe(false)
    })

    test("全てのマスが埋まっていてかつ勝者が決まった場合、falseを返す", () => {
        const square = [F, S, F, F, S, F, S, F, F]
        expect(isDraw(square, F)).toBe(false)
    })

    test("一部のマスが埋まっていない場合、falseを返す", () => {
        const square = [null, S, F, F, S, F, S, F, S]
        expect(isDraw(square, null)).toBe(false)
    })

    test("一部のマスが埋まっていない場合かつ勝者が決まっている場合、falseを返す", () => {
        const square = [null, S, F, F, S, F, S, F, S]
        expect(isDraw(square, S)).toBe(false)
    })
})

describe("calculateWinner", () => {
    test("勝者が存在する場合正しい勝者を返す", () => {
        const winLines1 = [S, S, S, null, F, F, null, null, null]
        const winLines2 = [S, F, F, S, null, null, S, null, null]
        const winLines3 = [S, F, F, null, S, null, null, null, S]
        expect(calculateWinner(winLines1)).toBe(S)
        expect(calculateWinner(winLines2)).toBe(S)
        expect(calculateWinner(winLines3)).toBe(S)
    })
    test("勝者が存在しない場合はnullを返す", () => {
        const square = [null, S, F, F, S, F, S, F, S]
        expect(calculateWinner(square)).toBe(null)
    })
    test("盤面が埋まっていても、勝者が存在しない場合はnullを返す", () => {
        const square = [F, S, F, F, S, F, S, F, S]
        expect(calculateWinner(square)).toBe(null)
    })
})
