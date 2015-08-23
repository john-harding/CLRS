// All of these algorithms were learned while reading Introduction to Algorithms, 3rd Edition (CLRS)
// I have done them many times since, and these are all done from scratch without help from the book or the past algorithms I've written

var arr = [53,26,8,3,44,31,78,99,235,12,45,72,18,39,61,68,489,5319,75];

var sorted = [3,8,12,18,26,31,39,44,45,53,61,68,72,75,78,99,235,489,5319];

function merge_sort(A, p, r)
{
	if(p < r)
	{
		var q = Math.floor((r + p) / 2);
		merge_sort(A, p, q);
		merge_sort(A, q+1, r);
		merge(A, p, q, r);
	}
}

function merge(A, p, q, r)
{
	var L = A.slice(p, q+1); // get copies of left and right arrays
	var R = A.slice(q+1, r+1);
	L.push(Infinity); // add sentinals to left and right arrays
	R.push(Infinity);

	var i = j = 0; // keep track of L and R indices, respectively
	for(var k = p; k <= r; k++)
	{
		if(L[i] < R[j])  // if L's current value is less than R's value
		{
			A[k] = L[i]; // 
			i++; // increment position of L's index
		} else {
			A[k] = R[j];
			j++;
		}
	}
}

merge_sort(arr, 0, arr.length-1);


console.log(compare_arrays(arr,sorted));


function compare_arrays(arr1, arr2) // compare the two arrays for equality
{
	if(arr1.length != arr2.length)
	{
		return false;
	}
	for(var i = 0; i < arr1.length; i++)
	{
		if(arr1[i] !== arr2[i])
		{
			return false;
		}
	}
	return true;
}