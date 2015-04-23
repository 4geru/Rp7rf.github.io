#include<iostream>
#include<vector>
#define loop(i,a,b) for(int i = a ; i < b ; i ++)
#define rep(i,a) loop(i,0,a)
using namespace std;

int wari[3][2] = {
  {500,850},
  {300,550},
  {200,380},
};
int main(void){
  int n;
  while(cin>>n,n){
  
    int money = 1e9;
    n /= 100;
    rep(i,26){
      rep(j,17){
	rep(k,11){
	  if (2 * i + 3 * j + 5 * k == n) { 
	    money = min(money,  
			i / 5 * 1520 + i % 5 * 380 +
			j / 4 * 1870 + j % 4 * 550 +
			k / 3 * 2244 + k % 3 * 850);
	  }
	}
      }
    }
    
    cout<<money<<endl;
  }
  
  return 0;
}
