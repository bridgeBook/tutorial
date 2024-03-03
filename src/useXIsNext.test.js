import { renderHook, act } from "@testing-library/react";
import { useXIsNext } from "./useXIsNext";

test("", () => {
    const { result } = renderHook(() => useXIsNext(false))
    expect(result.current[0]).toBe(false)
})