/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/strided/base/cmap.h"
#include <complex.h>
#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "cmap"
#define ITERATIONS 10000000
#define REPEATS 3
#define MIN 1
#define MAX 6

/**
* Prints the TAP version.
*/
static void print_version( void ) {
	printf( "TAP version 13\n" );
}

/**
* Prints the TAP summary.
*
* @param total     total number of tests
* @param passing   total number of passing tests
*/
static void print_summary( int total, int passing ) {
	printf( "#\n" );
	printf( "1..%d\n", total ); // TAP plan
	printf( "# total %d\n", total );
	printf( "# pass  %d\n", passing );
	printf( "#\n" );
	printf( "# ok\n" );
}

/**
* Prints benchmarks results.
*
* @param iterations   number of iterations
* @param elapsed      elapsed time in seconds
*/
static void print_results( int iterations, double elapsed ) {
	double rate = (double)iterations / elapsed;
	printf( "  ---\n" );
	printf( "  iterations: %d\n", iterations );
	printf( "  elapsed: %0.9f\n", elapsed );
	printf( "  rate: %0.9f\n", rate );
	printf( "  ...\n" );
}

/**
* Returns a clock time.
*
* @return clock time
*/
static double tic( void ) {
	struct timeval now;
	gettimeofday( &now, NULL );
	return (double)now.tv_sec + (double)now.tv_usec/1.0e6;
}

/**
* Generates a random number on the interval [0,1).
*
* @return random number
*/
static float rand_float( void ) {
	int r = rand();
	return (float)r / ( (float)RAND_MAX + 1.0f );
}

/**
* Evaluates the identity function.
*
* @param x   input value
* @return    input value
*/
static float complex identity( const float complex x ) {
	return x;
}

/**
* Runs a benchmark.
*
* @param iterations   number of iterations
* @param len          array length
* @return             elapsed time in seconds
*/
static double benchmark( int iterations, int len ) {
	float complex x[ len ];
	float complex y[ len ];
	double elapsed;
	double t;
	int i;

	for ( i = 0; i < len; i++ ) {
		x[ i ] = ( ( rand_float()*200.0f ) - 100.0f ) + ( ( rand_float()*200.0f ) - 100.0f )*I;
		y[ i ] = 0.0f + 0.0f*I;
	}
	t = tic();
	for ( i = 0; i < iterations; i++ ) {
		// cppcheck-suppress uninitvar
		stdlib_strided_cmap( len, x, 1, y, 1, identity );
		if ( y[ i%len ] != y[ i%len ] ) {
			printf( "should not return NaN\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( y[ i%len ] != y[ i%len ] ) {
		printf( "should not return NaN\n" );
	}
	return elapsed;
}

/**
* Main execution sequence.
*/
int main( void ) {
	double elapsed;
	int count;
	int iter;
	int len;
	int i;
	int j;

	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	print_version();
	count = 0;
	for ( i = MIN; i <= MAX; i++ ) {
		len = pow( 10, i );
		iter = ITERATIONS / pow( 10, i-1 );
		for ( j = 0; j < REPEATS; j++ ) {
			count += 1;
			printf( "# c::%s:len=%d\n", NAME, len );
			elapsed = benchmark( iter, len );
			print_results( iter, elapsed );
			printf( "ok %d benchmark finished\n", count );
		}
	}
	print_summary( count, count );
}
