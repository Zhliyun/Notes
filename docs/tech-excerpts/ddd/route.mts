import { UserConfig } from 'vitepress';

const routes: UserConfig['themeConfig']['sidebar'] = [
  {
    text: 'DDD 实战课',
    base: '/tech-excerpts/ddd/',
    link: '/',
    collapsed: true,
    items: [
      {
        text: '开篇',
        base: '/tech-excerpts/ddd/00/',
        link: '/',
        collapsed: true,
        items: [
          {
            text: '学好了 DDD，你能做什么？',
            link: '/'
          }
        ]
      },
      {
        text: '基础篇',
        base: '/tech-excerpts/ddd/01/',
        link: '/',
        collapsed: true,
        items: [
          {
            text: '领域驱动设计：微服务设计为什么要选择 DDD？',
            link: '/01'
          },
          {
            text: '领域、子域、核心域、通用域和支撑域：傻傻分不清？',
            link: '/02'
          },
          {
            text: '限界上下文：定义领域边界的利器',
            link: '/03'
          },
          {
            text: '实体和值对象：从领域模型的基础单元看系统设计',
            link: '/04'
          },
          {
            text: '聚合和聚合根：怎样设计聚合？',
            link: '/05'
          }
        ]
      },
      {
        text: '进阶篇',
        base: '/tech-excerpts/ddd/02/',
        link: '/',
        collapsed: true,
        items: [
          {
            text: '领域事件：解耦微服务的关键？',
            link: '/01'
          },
          {
            text: 'DDD 分层架构：有效降低层与层之间的依赖',
            link: '/02'
          },
          {
            text: '微服务架构模型：几种常见模型的对比和分析',
            link: '/03'
          },
          {
            text: '中台：数字转型后到底应该共享什么？',
            link: '/04'
          },
          {
            text: 'DDD、中台和微服务：它们是如何协作的？',
            link: '/05'
          },
          {
            text: '答疑：有关 3 个典型问题的讲解',
            link: '/06'
          }
        ]
      },
      {
        text: '实战篇',
        base: '/tech-excerpts/ddd/03/',
        link: '/',
        collapsed: true,
        items: [
          {
            text: 'DDD 实践：如何用 DDD 重构中台业务模型？',
            link: '/01'
          },
          {
            text: '领域建模：如何用事件风暴构建领域模型？',
            link: '/02'
          },
          {
            text: '代码模型（上）：如何使用 DDD 设计微服务代码模型？',
            link: '/03'
          },
          {
            text: '代码模型（下）：如何保证领域模型与代码模型的一致性？',
            link: '/04'
          },
          {
            text: '边界：微服务的各种边界在架构演进中的作用？',
            link: '/05'
          },
          {
            text: '视图：如何实现服务和数据在微服务各层的协作？',
            link: '/06'
          },
          {
            text: '从后端到前端：微服务后，前端如何设计？',
            link: '/07'
          },
          {
            text: '知识点串讲：基于 DDD 的微服务设计实例',
            link: '/08'
          },
          {
            text: '总结（一）：微服务设计和拆分要坚持哪些原则？',
            link: '/09'
          },
          {
            text: '总结（二）：分布式架构关键设计 10 问',
            link: '/10'
          }
        ]
      },
      {
        text: '结束',
        base: '/tech-excerpts/ddd/04/',
        link: '/',
        collapsed: true,
        items: [
          {
            text: '所谓高手，就是跨过坑和大海！',
            link: '/'
          },
          {
            text: '基于 DDD 的微服务设计实例代码详解',
            link: '/01'
          }
        ]
      }
    ]
  }
];

export default routes;