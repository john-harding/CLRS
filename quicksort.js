// All of these algorithms were learned while reading Introduction to Algorithms, 3rd Edition (CLRS)
// I have done them many times since, and these are all done from scratch without help from the book or the past algorithms I've written

var arr = [53,26,8,3,44,31,78,99,235,12,45,72,18,39,61,68,489,5319,75];

var sorted = [3,8,12,18,26,31,39,44,45,53,61,68,72,75,78,99,235,489,5319];

function tail_recrusive_quicksort(A, p, r) // use tail recursive quicksort to avoid stackoverflow of recursive functions
{
	while(p < r)
	{
		var q = randomized_partition(A, p, r);
		tail_recrusive_quicksort(A, p, q-1);
		p = q + 1;
	}
}

function randomized_partition(A, p, r) // switch the last item (r) with a random item in the array (between r and p)
{
	var random = Math.floor(Math.random() * (r - p)) + p;
	var temp = A[r];
	A[r] = A[random];
	A[random] = temp;
	return partition(A,p,r);
}

function partition(A, p, r)
{
	var pivot = A[r];
	var partition = p;
	var temp;
	for(var i = p; i < r; i++)
	{
		if(A[i] < pivot) // if A[i] is smaller than the last item, put it in the left partition
		{
			temp = A[i];
			A[i] = A[partition];
			A[partition] = temp;
			partition++;
		}
	}

	// switch pivot (last item) with the current partition location to put r in the correct position (smaller than r to the left, larger to the right)
	A[r] = A[partition];
	A[partition] = pivot;
	return partition;
}

tail_recrusive_quicksort(arr,0,arr.length-1);



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