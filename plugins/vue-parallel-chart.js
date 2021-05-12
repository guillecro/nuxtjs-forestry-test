import Vue from 'vue'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'

// import ECharts modules manually to reduce bundle size
import {
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  ParallelComponent,
  VisualMapComponent
} from 'echarts/components'
import {
  ParallelChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'

use([ToolboxComponent, TooltipComponent, LegendComponent, VisualMapComponent, ParallelComponent, ParallelChart, CanvasRenderer])

// register globally (or you can do it locally)
Vue.component('v-parallel-chart', ECharts)
