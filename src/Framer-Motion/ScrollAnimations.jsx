import { motion, useScroll } from "framer-motion";
export default function ScrollAnimations() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",

          width: "100%",
          height: "20px",
          position: "sticky",
          top: 0,
          background: "orange",
        }}
      ></motion.div>
      <div
        style={{
          padding: "1.5rem",
          margin: "auto",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nemo.
          Adipisci cum officiis perferendis error et eum impedit atque possimus,
          nihil dignissimos molestiae at illo velit quidem quo cupiditate
          suscipit natus culpa eaque sapiente, rerum ut architecto ipsa. Id a
          repellendus dolore vitae aperiam doloribus eaque consequuntur placeat
          quisquam iste.
        </p>
        <p>
          Voluptatem ratione qui quis labore repellendus, pariatur ad molestiae
          eos ducimus molestias at reprehenderit perferendis laboriosam
          nesciunt! Facilis perspiciatis a ratione perferendis, est dolorum
          commodi officia repellendus nihil quisquam mollitia, odit accusamus,
          deleniti quo culpa modi in distinctio! Non vel unde eum labore rem!
          Praesentium fugit quae ipsam doloremque eum!
        </p>
        <p>
          Provident quidem inventore soluta sunt adipisci libero culpa
          repellendus iusto minus, iste quas earum fugit esse impedit! Unde
          laborum voluptatum quis aliquid iste nemo, id iusto sunt! Libero
          suscipit cupiditate accusamus! Unde ad nostrum a dignissimos sequi id
          laboriosam, tempore, impedit quidem et laborum, debitis incidunt eius.
          Sit, autem nemo.
        </p>
        <p>
          Cum expedita, fugiat iusto cupiditate quis odio ipsa? Unde molestiae
          voluptate harum aspernatur sint itaque excepturi quas vel illum ab
          doloribus laborum inventore nisi atque exercitationem quod fuga, nobis
          porro aut dicta iusto officia omnis recusandae? Voluptate, aliquam
          architecto quisquam rem vero totam, odio distinctio quae dolore dolor
          exercitationem doloremque.
        </p>
        <p>
          Illum error facere iusto architecto nesciunt accusamus asperiores
          suscipit mollitia repudiandae quis? Sunt asperiores, facilis excepturi
          et architecto dolor at vel voluptatem eius nobis itaque a, similique
          nemo consequatur esse velit quos odit, perspiciatis eaque voluptates
          repudiandae aliquid doloremque possimus! Minima maxime laboriosam eum
          nesciunt dolore? Recusandae impedit placeat repellat?
        </p>
        <p>
          Magni porro voluptas, saepe voluptatibus, quidem a eos tenetur dolorem
          sapiente unde quia! Sapiente aliquid quo suscipit est. Voluptatem,
          sint earum porro, assumenda ullam cupiditate incidunt odit corporis
          eveniet, ipsum voluptatum aspernatur reiciendis neque aut omnis quidem
          dolore alias! Accusamus nesciunt, asperiores cum excepturi fuga omnis
          illo ullam obcaecati sapiente.
        </p>
        <p>
          Tempore incidunt quas dicta consectetur assumenda placeat? Nisi
          deleniti quidem earum suscipit impedit exercitationem praesentium
          commodi at libero soluta mollitia optio tempora ipsum quam ipsa,
          quaerat repellendus eligendi saepe, fugit eveniet nobis odit ratione.
          Nihil nam, architecto nisi minus eligendi minima in ipsa, quas
          necessitatibus iure, voluptatem fugit. Cupiditate, perferendis.
        </p>
        <p>
          Quo earum itaque rerum? Quam eius labore ducimus officia cumque ut
          atque explicabo quo, fuga quidem culpa harum. Quod commodi laudantium
          itaque! Pariatur temporibus incidunt, earum impedit sint odit culpa
          ipsa similique odio eligendi voluptates. Veritatis consequuntur
          pariatur praesentium facilis quam dignissimos suscipit corporis
          assumenda, rem, molestias quas explicabo labore?
        </p>
        <p>
          At rem maiores quia cupiditate quasi, accusantium excepturi. Cumque
          voluptatem impedit explicabo ullam voluptas adipisci nostrum amet,
          maiores quas molestias, temporibus error? Quis dolores vitae rerum
          totam deserunt, natus, maxime hic adipisci reprehenderit eveniet
          cupiditate consectetur officiis sit. Ea voluptas nemo, dignissimos
          modi illum iusto enim numquam quis at quo!
        </p>
        <p>
          A, assumenda labore voluptatibus vel expedita vitae. Debitis
          necessitatibus nemo molestias nihil et. Velit beatae aut, corporis
          facere animi debitis assumenda neque ipsum recusandae cupiditate amet
          perspiciatis harum saepe fuga ab officia. A eveniet dolores incidunt
          similique magnam provident eaque saepe quasi qui vitae, fugiat
          corporis repellendus quidem. Suscipit, illum?
        </p>
      </div>
    </>
  );
}
