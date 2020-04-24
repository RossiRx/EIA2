var Cows;
(function (Cows) {
    var nums = [2, 6, 5];
    var results = [];
    for (var i = 0; i < nums.length; i++) {
        var result = createCall("m", nums[i]);
        results.push(result);
    }
    console.log(results);
    function createCall(_start, _length) {
        for (var k = _length; k > 0; k--) {
            if (k == 1 || k == _length / 2)
                _start += "h";
            _start += "u";
        }
        return _start;
    }
})(Cows || (Cows = {}));
//# sourceMappingURL=Cows.js.map