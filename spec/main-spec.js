const main = require('../main/main');

describe('taxi fee', function () {
    var solution1 = [1, 0];
    var solution2 = [1, 3];
    var solution3 = [7, 2];
    var solution4 = [10.4, 5];
    it('mileage < 2 and no time waiting', function () {
        var summary = main(solution1);
        var expected = 6;
        expect(summary).toEqual(expected);
    });

    it('mileage < 2 and  time waiting = 3', function () {
        var summary = main(solution2);
        var expected = 7;
        expect(summary).toEqual(expected);
    });

    it('mileage < 8 and time waiting == 2', function () {
        let summary = main(solution3);
        let expected = 11;
        expect(summary).toEqual(expected);
    });

    it('mileage > 8 and time waiting == 5', function () {
        let summary = main(solution4);
        let expected = 14;
        expect(summary).toEqual(expected);
    });

});

