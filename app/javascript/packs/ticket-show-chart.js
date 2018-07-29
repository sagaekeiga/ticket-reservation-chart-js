showScoreChart();

// 関数化
function showScoreChart() {
  $.ajax({
    type: 'GET',
    url: `/tickets/${$('.page-header').attr('ticket-id')}`,
    dataType: 'JSON',
    success: function(data) {
      // 描画位置の取得
      var context = document.getElementById('chart').getContext('2d');
      // 背景カラーの用意
      var graphColorArray = ['rgba(244, 143, 177, 0.6)', 'rgba(255, 235, 59, 0.6)'];
      // チャートデータの生成
      var myChart = new Chart(context, {
          // 円グラフを指定
          type: 'pie',
          data: {
            // チャート上部のラベル
            labels: data.gender_names,
            datasets:  [{
              data: data.genders,
              backgroundColor: graphColorArray, // グラフカラー
              pointBackgroundColor: '#ffffff' // 背景カラー
            }]
          },
          // チャートのオプション設定
          options: {
            responsive: true, // レスポンシブ設定
            maintainAspectRatio: false, // アスペクト比の維持設定
          }
      });
    }
  });
};
