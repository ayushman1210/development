#include <bits/stdc++.h>
using namespace std;
int main(){
// int n;
//  cin>>n;
// vector<int>v(n);
// vector<int>hash(256,0);
string s;
cin>>s;
// for(int i=0; i<s.size(); i++){
//     hash[s[i]]++;
// }

// for(int i=0; i<n; i++){cin>>v[i];}
// for(int i=0; i<n; i++){
//     hash[v[i]]++;
// }

// int q;
// cin>>q;
// while(q--){
//     char c;
//     cin>>c;
//     cout<<hash[c];
// }


map<char,int>mpp;
for(int i=0; i<s.size(); i++){
    mpp[s[i]]++;
}

// unordered_map<int,int>mpp;
// for(int i=0; i<n; i++){
//     mpp[v[i]]++;
// }
for(int i=0;i<256; i++){
    if(mpp[i]>0)
    cout<<(mpp[i])<<" "<<char(i)<<endl;
}


}