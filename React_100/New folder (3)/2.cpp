#include <bits/stdc++.h>
using namespace std;

// Custom comparator function
bool compareBySecond(const pair<int, int>& a, const pair<int, int>& b) {
    return a.second < b.second;
}

int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> v;
    for (int i = 0; i < n; i++) {
        int a, b;
        cin >> a >> b;
        v.push_back({a, b});
    }

    // Use custom comparator
    sort(v.begin(), v.end(), compareBySecond);

    for (auto p : v) {
        cout << p.first << " " << p.second << endl;
    }

    return 0;
}
