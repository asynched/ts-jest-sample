/**
 * @author Matheus Alves Pereira <matttalves@gmail.com>
 */
import { encrypt } from "./caesar-cipher";

describe("caesar-cipher.ts", () => {
  describe("encrypt", () => {
    it("should encrypt string", () => {
      expect(encrypt("hello", 5)).toBe("mjqqt");
    });

    it("should returns same string if shift value equals 0", () => {
      expect(encrypt("hello", 0)).toBe("hello");
    });

    it("should encrypt uppercase letters", () => {
      expect(encrypt("BraZil", 5)).toBe("Gwf_nq");
    });

    it("should encrypt spaces", () => {
      expect(encrypt("Banana is Delicious", 5)).toBe("Gfsfsf%nx%Ijqnhntzx");
    });
  });
});
