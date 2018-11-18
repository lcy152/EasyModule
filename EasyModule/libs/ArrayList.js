function ArrayList() {
    this.array = [];

    ArrayList.prototype.insert = function (item) {
        return this.array.push(item);
    }

    ArrayList.prototype.toString = function () {
        return this.array.join();
    }

    ArrayList.prototype.concat = function () {
        for (var i = 0; i < arguments.length; i++) {
            var argo = arguments[i];
            console.log(argo);
            for (var j = 0; j < argo.length; j++) {
                this.array.push(argo[j]);
            }
        };
    }

    ArrayList.prototype.quickSort = function () {
        this.array = this.quickSortSeq(this.array);
    }

    ArrayList.prototype.quickSortSeq = function (arr) {
        if (arr.length <= 1) { return arr; }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return this.quickSortSeq(left).concat([pivot], this.quickSortSeq(right));
    };

    ArrayList.prototype.swap = function (m, n) {
        var temp = this.array[m];
        this.array[m] = this.array[n];
        this.array[n] = temp;
    }
}

exports.ArrayList = ArrayList;


    // ArrayList.prototype.bubbleSort = function () {
    //     var length = this.array.length;
    //     for (var i = length - 1; i >= 0; i--) {
    //         for (var j = 0; j < i; j++) {
    //             if (this.array[j + 1] < this.array[j]) {
    //                 this.swap(j + 1, j);
    //             }
    //         }
    //     }
    // }

    // ArrayList.prototype.selectSort = function () {
    //     var length = this.array.length;
    //     for (var i = 0; i < length - 1; i++) {
    //         var min = i;
    //         for (var j = min + 1; j < length; j++) {
    //             if (this.array[j] > this.array[min]) {
    //                 min = j;
    //             }
    //         }
    //         this.swwap(min, j);
    //     }
    // }