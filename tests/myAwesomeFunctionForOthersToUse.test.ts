import { myAwesomeFunctionForOthersToUse } from "../src";

test("My awesome function for others to use", async () => {
    const answer = myAwesomeFunctionForOthersToUse();
    expect(answer).toEqual(42);
});
