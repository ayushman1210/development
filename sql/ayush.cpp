#include <bits/stdc++.h>
using namespace std;



void solution(){
int a; 
    int b;
    cin>>a>>b;
    int k;
    for(int i=2;i<9; i++){
        if(i%2==0 && b%i==0){k=2; break;}
        if(b%i==0 && i%2!=0){k=i; break; }
        else if(b==1 && a%2!=0){cout<<-1; return;}
        else if (b==1 && a%2==0){k=1;}
        else k=b;
}
int res;
res=a*k+b/k;
if(res%2==0){cout<<res<<" ";}
else{cout<<-1; }
}


int main(){
    int t;
    cin>>t;
    while(t--){
        solution();
    }
    }