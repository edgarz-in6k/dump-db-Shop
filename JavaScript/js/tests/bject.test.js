describe("appending strings", function() {
    it("should be able to append 2 strings", function() {
        expect(myfunc.append).toBeDefined();
    });
    it("should append 2 strings", function() {
        expect(myfunc.append('hello ','world')).toEqual('hello world');
    });
});
